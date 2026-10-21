import React, { useState, useRef, useEffect } from 'react';
import { X, AlertCircle, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../data/content';
import Button from '../components/Button';

export default function ContactModal({
  isOpen,
  onClose,
  returnFocusRef,
}) {
  const modalContent = siteContent.contact.modal;
  const dialogRef = useRef(null);
  const innerRef = useRef(null);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageTextareaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    _gotcha: '',
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Reset to fresh form state when opened
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        _gotcha: '',
      });
      setStatus('idle');
      setErrorMessage('');
      setErrors({});
      setTouched({});
    }
  }, [isOpen]);

  // Dialog open/close management, body scroll lock, and initial focus
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      document.body.style.overflow = 'hidden';

      if (innerRef.current) {
        innerRef.current.scrollTop = 0;
      }

      // Focus first field on open without jarring scroll
      const focusTimer = setTimeout(() => {
        nameInputRef.current?.focus({ preventScroll: true });
      }, 50);

      return () => clearTimeout(focusTimer);
    } else {
      if (dialog.open) {
        dialog.close();
      }
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    }
    document.body.style.overflow = '';
    onClose();
    // Return focus to the card that opened it
    returnFocusRef?.current?.focus();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    handleClose();
  };

  const handleBackdropClick = (e) => {
    if (!dialogRef.current) return;
    const rect = dialogRef.current.getBoundingClientRect();
    const isOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;
    if (isOutside) {
      handleClose();
    }
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) {
          return modalContent.validation.nameRequired;
        }
        return '';
      case 'email':
        if (!value.trim()) {
          return modalContent.validation.emailRequired;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return modalContent.validation.emailInvalid;
        }
        return '';
      case 'message':
        if (!value.trim()) {
          return modalContent.validation.messageRequired;
        }
        if (value.trim().length < 20) {
          return modalContent.validation.messageMinLength;
        }
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (fieldName) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const error = validateField(fieldName, formData[fieldName]);
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const fallbackEmail = siteContent.contact.email;
  const fallbackSubject = siteContent.contact.subject;

  const fallbackMailto = `mailto:${fallbackEmail}?subject=${encodeURIComponent(
    fallbackSubject
  )}&body=${encodeURIComponent(formData.message)}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    setTouched({
      name: true,
      email: true,
      company: true,
      message: true,
    });

    setErrors(newErrors);

    if (newErrors.name) {
      nameInputRef.current?.focus();
      return;
    }
    if (newErrors.email) {
      emailInputRef.current?.focus();
      return;
    }
    if (newErrors.message) {
      messageTextareaRef.current?.focus();
      return;
    }

    // Honeypot check: silently simulate success if filled by bot
    if (formData._gotcha) {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        _gotcha: '',
      });
      return;
    }

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT_GENERAL;
    const isEndpointDefined = Boolean(endpoint && endpoint.trim());

    if (!isEndpointDefined) {
      if (import.meta.env.DEV) {
        console.warn(
          '[Njoku International Contact Form] Missing or empty VITE_FORM_ENDPOINT_GENERAL. Form cannot be submitted.'
        );
        console.log('[Njoku International Contact Form] Submit attempt:', {
          endpointDefined: false,
          status: null,
          body: null,
        });
      }
      setStatus('error');
      setErrorMessage(modalContent.errorMessage);
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch(endpoint.trim(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          message: formData.message.trim(),
          _subject: fallbackSubject,
          _gotcha: '',
        }),
      });

      let responseBody = null;
      try {
        responseBody = await response.json();
      } catch {
        // Non-JSON or empty response
      }

      if (import.meta.env.DEV) {
        console.log('[Njoku International Contact Form] Submit result:', {
          endpointDefined: true,
          status: response.status,
          body: responseBody,
        });
      }

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          _gotcha: '',
        });
        setTouched({});
        setErrors({});
      } else {
        setStatus('error');
        setErrorMessage(modalContent.errorMessage);
      }
    } catch (err) {
      if (import.meta.env.DEV) {
        console.log('[Njoku International Contact Form] Submit error:', {
          endpointDefined: true,
          status: null,
          body: err?.message || 'Network error',
        });
      }
      setStatus('error');
      setErrorMessage(modalContent.errorMessage);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="contact-modal"
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-intro"
    >
      <div ref={innerRef} className="contact-modal__inner">
        <div className="contact-modal__header">
          <div className="contact-modal__title-group">
            <h3 id="contact-modal-title" className="contact-modal__title">
              {modalContent.title}
            </h3>
            <p id="contact-modal-intro" className="contact-modal__intro">
              {modalContent.intro}
            </p>
          </div>
          <button
            type="button"
            className="contact-modal__close-btn"
            onClick={handleClose}
            aria-label="Close dialog"
          >
            <X size={20} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        <div className="sr-only" aria-live="polite">
          {status === 'sending' && modalContent.sendingAction}
          {status === 'success' && modalContent.successMessage}
          {status === 'error' && `${errorMessage || modalContent.errorMessage}. Direct email: ${fallbackEmail}`}
        </div>

        {status === 'success' ? (
          <div className="contact-modal__success-state">
            <div className="contact-modal__success-icon-wrap" aria-hidden="true">
              <CheckCircle2 size={36} className="contact-modal__success-icon" />
            </div>
            <h4 className="contact-modal__success-title">{modalContent.successTitle}</h4>
            <p className="contact-modal__success-message">{modalContent.successMessage}</p>
            <div className="contact-modal__success-actions">
              <Button
                type="button"
                variant="primary"
                onClick={handleClose}
                className="contact-modal__close-action-btn"
              >
                {modalContent.closeAction}
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="contact-modal__form">
            {/* Honeypot field */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="contact-gotcha">Do not fill this</label>
              <input
                id="contact-gotcha"
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Error banner on failure */}
            {status === 'error' && (
              <div className="contact-modal__error-box" role="alert">
                <div className="contact-modal__error-row">
                  <AlertCircle size={18} className="contact-modal__error-icon" aria-hidden="true" />
                  <span className="contact-modal__error-text">
                    {errorMessage || modalContent.errorMessage}
                  </span>
                </div>
                <p className="contact-modal__fallback-prompt">
                  {modalContent.fallbackIntro}{' '}
                  <a href={fallbackMailto} className="contact-modal__fallback-link">
                    {fallbackEmail}
                  </a>
                </p>
              </div>
            )}

            {/* Field: Name */}
            <div className="contact-form__group">
              <label htmlFor="contact-field-name" className="contact-form__label">
                {modalContent.fields.nameLabel}{' '}
                <span className="contact-form__required" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-field-name"
                ref={nameInputRef}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur('name')}
                autoComplete="name"
                required
                className={`contact-form__input ${
                  touched.name && errors.name ? 'is-invalid' : ''
                }`}
                aria-invalid={!!(touched.name && errors.name)}
                aria-describedby={
                  touched.name && errors.name ? 'contact-error-name' : undefined
                }
              />
              {touched.name && errors.name && (
                <span
                  id="contact-error-name"
                  className="contact-form__field-error"
                  role="alert"
                >
                  <AlertCircle size={14} aria-hidden="true" />
                  <span>{errors.name}</span>
                </span>
              )}
            </div>

            {/* Field: Email */}
            <div className="contact-form__group">
              <label htmlFor="contact-field-email" className="contact-form__label">
                {modalContent.fields.emailLabel}{' '}
                <span className="contact-form__required" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-field-email"
                ref={emailInputRef}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                autoComplete="email"
                required
                className={`contact-form__input ${
                  touched.email && errors.email ? 'is-invalid' : ''
                }`}
                aria-invalid={!!(touched.email && errors.email)}
                aria-describedby={
                  touched.email && errors.email ? 'contact-error-email' : undefined
                }
              />
              {touched.email && errors.email && (
                <span
                  id="contact-error-email"
                  className="contact-form__field-error"
                  role="alert"
                >
                  <AlertCircle size={14} aria-hidden="true" />
                  <span>{errors.email}</span>
                </span>
              )}
            </div>

            {/* Field: Company */}
            <div className="contact-form__group">
              <label htmlFor="contact-field-company" className="contact-form__label">
                {modalContent.fields.companyLabel}{' '}
                <span className="contact-form__optional">
                  {modalContent.fields.optionalBadge}
                </span>
              </label>
              <input
                id="contact-field-company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                autoComplete="organization"
                className="contact-form__input"
              />
            </div>

            {/* Field: Message */}
            <div className="contact-form__group">
              <label htmlFor="contact-field-message" className="contact-form__label">
                {modalContent.fields.messageLabel}{' '}
                <span className="contact-form__required" aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-field-message"
                ref={messageTextareaRef}
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={() => handleBlur('message')}
                rows={4}
                required
                className={`contact-form__textarea ${
                  touched.message && errors.message ? 'is-invalid' : ''
                }`}
                aria-invalid={!!(touched.message && errors.message)}
                aria-describedby={
                  touched.message && errors.message
                    ? 'contact-error-message'
                    : undefined
                }
              />
              {touched.message && errors.message && (
                <span
                  id="contact-error-message"
                  className="contact-form__field-error"
                  role="alert"
                >
                  <AlertCircle size={14} aria-hidden="true" />
                  <span>{errors.message}</span>
                </span>
              )}
            </div>

            {/* Submit Action and Privacy Note */}
            <div className="contact-modal__actions">
              <Button
                type="submit"
                variant="primary"
                disabled={status === 'sending'}
                className="contact-modal__submit-btn"
              >
                {status === 'sending'
                  ? modalContent.sendingAction
                  : modalContent.sendAction}
              </Button>
              <p className="contact-modal__privacy-note">
                {modalContent.note}
              </p>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}
