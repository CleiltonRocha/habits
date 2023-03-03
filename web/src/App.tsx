import './styles/global.css';
import './lib/dayjs';
import { Header } from './components/Header';
import { SumaryTable } from './components/SumaryTable';

export function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center '>
      <div className='w-full max-w-5xl px-6 flex flex-col gap-16' >

        <Header />
        <SumaryTable />

      </div>
    </div>
  )
}


// Componente: Reaproveitar / Isolar
// Propriedade: Informação enviada para modificcar um componente visual ou comportamentalmente