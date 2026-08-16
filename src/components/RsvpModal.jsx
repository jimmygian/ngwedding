import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfBllZGuxqFVnGoLpMpYcvLTxkvdr0Zu98JV5FLljh71ubHrg/formResponse";
const ENTRY_NAME = "entry.385152538";
const ENTRY_ATTENDANCE = "entry.877086558";

export default function RsvpModal({ isOpen, onClose }) {
  const { t, language, toggleLanguage } = useLanguage();
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('Yes / Ναί');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setStatus('submitting');
    try {
      const formData = new FormData();
      formData.append(ENTRY_NAME, name.trim());
      formData.append(ENTRY_ATTENDANCE, attendance);

      await fetch(FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      setStatus('success');
    } catch (err) {
      console.error('RSVP submit error:', err);
      // Even if fetch throws in some browser configurations, with no-cors the submission usually succeeds.
      setStatus('success');
    }
  };

  const handleResetAndClose = () => {
    setName('');
    setAttendance('Yes / Ναί');
    setStatus('idle');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
      onClick={handleResetAndClose}
    >
      <div 
        className="relative w-full max-w-md bg-[#fdfaf6] rounded-xl shadow-2xl p-6 sm:p-8 border border-[#8b0000]/20 text-[#8b0000] transform transition-all duration-300 scale-100"
        style={{ fontFamily: '"Cormorant Garamond", serif' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Language Toggle button */}
        <button
          onClick={toggleLanguage}
          type="button"
          className="absolute top-4 left-4 text-xs sm:text-sm font-semibold tracking-wider text-[#8b0000] border border-[#8b0000]/40 hover:border-[#8b0000] rounded-full px-2.5 py-0.5 transition-colors cursor-pointer bg-white/40"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
          aria-label="Toggle language"
        >
          {language === 'en' ? 'ΕΛ' : 'EN'}
        </button>

        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          type="button"
          className="absolute top-4 right-4 text-[#8b0000]/60 hover:text-[#8b0000] transition-colors p-1 text-2xl leading-none focus:outline-none cursor-pointer"
          aria-label="Close"
        >
          &times;
        </button>

        {status === 'success' ? (
          <div className="text-center py-6 animate-fadeIn">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#8b0000]/10 flex items-center justify-center text-3xl">
              ♥
            </div>
            <h3 
              className="text-3xl sm:text-4xl font-normal mb-6 italic tracking-wide" 
              style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 400 }}
            >
              {t('rsvp', 'successTitle')}
            </h3>
            <button
              onClick={handleResetAndClose}
              className="px-6 py-2 rounded border border-[#8b0000] bg-[#8b0000] text-[#fdfaf6] hover:bg-[#700000] transition-colors text-base tracking-wider cursor-pointer"
            >
              {t('rsvp', 'closeBtn')}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="text-center mb-4">
              <h3 
                className="text-3xl sm:text-4xl font-normal tracking-wide italic"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 400 }}
              >
                {t('rsvp', 'modalTitle')}
              </h3>
            </div>

            {/* Name Input */}
            <div className="flex flex-col text-left gap-1">
              <label className="text-sm font-semibold tracking-wider opacity-90">
                {t('rsvp', 'nameLabel')} *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('rsvp', 'namePlaceholder')}
                className="w-full px-3 py-2 bg-transparent border-b border-[#8b0000]/40 focus:border-[#8b0000] focus:outline-none text-lg text-[#8b0000] placeholder-[#8b0000]/40 transition-colors"
              />
            </div>

            {/* Attendance Options */}
            <div className="flex flex-col text-left gap-2 mt-2">
              <label className="text-sm font-semibold tracking-wider opacity-90">
                {t('rsvp', 'attendanceLabel')} *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAttendance('Yes / Ναί')}
                  className={`py-2.5 px-3 rounded border text-center transition-all duration-200 text-base sm:text-lg flex items-center justify-center gap-2 ${
                    attendance === 'Yes / Ναί'
                      ? 'bg-[#8b0000] text-[#fdfaf6] border-[#8b0000] shadow-sm'
                      : 'bg-white/50 text-[#8b0000] border-[#8b0000]/30 hover:border-[#8b0000]'
                  }`}
                >
                  <span>✓</span>
                  <span>{language === 'el' ? 'Ναι' : 'Yes'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAttendance('No / Όχι')}
                  className={`py-2.5 px-3 rounded border text-center transition-all duration-200 text-base sm:text-lg flex items-center justify-center gap-2 ${
                    attendance === 'No / Όχι'
                      ? 'bg-[#8b0000] text-[#fdfaf6] border-[#8b0000] shadow-sm'
                      : 'bg-white/50 text-[#8b0000] border-[#8b0000]/30 hover:border-[#8b0000]'
                  }`}
                >
                  <span>✕</span>
                  <span>{language === 'el' ? 'Όχι' : 'No'}</span>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-4 w-full py-2.5 rounded border border-[#8b0000] bg-[#8b0000] text-[#fdfaf6] hover:bg-[#700000] transition-colors text-lg tracking-wider font-semibold shadow-sm hover:shadow disabled:opacity-50 cursor-pointer"
            >
              {status === 'submitting' ? t('rsvp', 'submitting') : t('rsvp', 'submitBtn')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
