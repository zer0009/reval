import { render, screen, act } from '@testing-library/react'
import { LanguageProvider, useLanguage } from './LanguageContext'
import { describe, test, expect, beforeEach, vi } from 'vitest'

const TestComponent = () => {
  const { language, toggleLanguage } = useLanguage()
  return (
    <div>
      <span data-testid="lang-display">{language}</span>
      <button onClick={toggleLanguage}>Toggle</button>
    </div>
  )
}

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.removeAttribute('dir')
    document.documentElement.removeAttribute('lang')
  })

  test('defaults to ar and sets dir=rtl', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('lang-display')).toHaveTextContent('ar')
    expect(document.documentElement).toHaveAttribute('dir', 'rtl')
    expect(document.documentElement).toHaveAttribute('lang', 'ar')
  })

  test('toggles to en and sets dir=ltr', async () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    const button = screen.getByRole('button', { name: /toggle/i })
    
    await act(async () => {
      button.click()
    })

    expect(screen.getByTestId('lang-display')).toHaveTextContent('en')
    expect(document.documentElement).toHaveAttribute('dir', 'ltr')
    expect(document.documentElement).toHaveAttribute('lang', 'en')
    expect(localStorage.getItem('language')).toBe('en')
  })

  test('initializes from localStorage', () => {
    localStorage.setItem('language', 'en')
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('lang-display')).toHaveTextContent('en')
    expect(document.documentElement).toHaveAttribute('dir', 'ltr')
  })

  test('handles invalid localStorage value by defaulting to ar', () => {
    localStorage.setItem('language', 'invalid')
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('lang-display')).toHaveTextContent('ar')
    expect(document.documentElement).toHaveAttribute('dir', 'rtl')
  })
})
