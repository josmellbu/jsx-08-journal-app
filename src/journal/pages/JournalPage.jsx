import { Navigate, Route, Routes } from "react-router-dom"

export const JournalPage = () => {
  return (
    <Routes>
      <Route path="/" element={ <JournalPage /> }/>
      <Route path="/*" element={ <Navigate to="/" /> }/>
    </Routes>
  )
}
