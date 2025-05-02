import { useState } from 'react'

export default function CookiesBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="cookies">
      <h3 className="cookiesHeader">INFORMACJA DOTYCZĄCA PLIKÓW COOKIES</h3>
      <p className="cookiesText">
       Informujemy, iż w celu optymalizacji treści dostępnych w naszym serwisie,
       dostosowania ich
       do Państwa indywidualnych potrzeb korzystamy z informacji zapisanych za pomocą plików cookies na
       urządzeniach
       końcowych
       użytkowników. Pliki cookies użytkownik może kontrolować za pomocą ustawień swojej przeglądarki
       internetowej.
       Dalsze korzystanie z naszego serwisu internetowego, bez zmiany ustawień przeglądarki internetowej
       oznacza, iż
       użytkownik akceptuje stosowanie plików cookies.
      </p>
      <button 
        onClick={() => setVisible(false)} 
        className="cookiesButton"
      >
        Akceptuj
      </button>
    </div>
  )
}