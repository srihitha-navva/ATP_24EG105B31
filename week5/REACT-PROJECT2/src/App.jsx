import './App.css'
import UsersList from '../components/UsersList' 
import NavBar from '../components/NavBar'
import Footer from '../components/Footer' 
import Counter from '../components/Counter'

function App(){
  return(
    <div>
      <NavBar />
      <div className='m-10 min-h-screen'>
      <UsersList /></div>
      <Footer />
    </div>
  )
}


export default App