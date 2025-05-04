import { useState, useEffect } from 'react'

export default function CookiesBanner() {
  const [visible, setVisible] = useState(true)

  // Sprawdzamy, czy użytkownik już zaakceptował pliki cookies
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted')
    if (cookiesAccepted) {
      setVisible(false)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookies">
      <h3 className="cookiesHeader">INFORMACJA DOTYCZĄCA PLIKÓW COOKIES</h3>
      <p className="cookiesText">
        Informujemy, iż w celu optymalizacji treści dostępnych w naszym serwisie,
        dostosowania ich do Państwa indywidualnych potrzeb korzystamy z informacji zapisanych za pomocą plików cookies na
        urządzeniach końcowych użytkowników. Pliki cookies użytkownik może kontrolować za pomocą ustawień swojej przeglądarki
        internetowej. Dalsze korzystanie z naszego serwisu internetowego, bez zmiany ustawień przeglądarki internetowej
        oznacza, iż użytkownik akceptuje stosowanie plików cookies.
      </p>
      <button 
        onClick={handleAccept} 
        className="cookiesButton"
      >
        Akceptuj
      </button>
    </div>
  )
}
