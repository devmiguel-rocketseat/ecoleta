import styles from './styles.module.scss'

import { Header } from '../../components/Header'
import { FormEvent, useState } from 'react'

interface Item {
  id: number
  title: string
  image_url: string
}

interface addRegisterProps {
  addRegister: any
}

export default function collectionRegister({ addRegister }: addRegisterProps) {
  //const [items, setItems] = useState<Item[]>([])
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [nameE, setNameE] = useState('')
  const [adress, setAdress] = useState('')
  const [number, setNumber] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const handleNameE = (e) => setNameE(e.target.value)

  const handleAdress = (e) => setAdress(e.target.value)

  const handleNumber = (e) => setNumber(e.target.value)

  const handleCity = (e) => setCity(e.target.value)

  const handleState = (e) => setState(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    const objRegister: any = {
      id: Date.now(),
      nameE,
      adress,
      number,
      city,
      state
    }

    addRegister(objRegister)
  }


  // function handleSelectItem(id: number) {
  //   const alreadSelected = selectedItems.findIndex(item => item === id)

  //   if (alreadSelected >= 0) {
  //     const filteredItems = selectedItems.filter(item => item !== id)
  //     setSelectedItems(filteredItems)
  //   } else {
  //     setSelectedItems([ ...selectedItems, id])
  //   }
  // }]

  return (
    <>
      <Header title="Voltar para home" img="/voltar.svg" url="/" />

      <div className={styles.containerCadastro}>
        <h1>Cadastro do <br /> ponto de coleta</h1>

        <h3>Dados da entidade</h3>

        <form action="" onSubmit={handleSubmit}>
          <section className={styles.inputContainer}>
            <div className={styles.input}>
              <label>Nome da entidade</label>
              <input id="" type="text" value={nameE} onChange={handleNameE} />
            </div>

            <div className={styles.input}>
              <label>Endereço</label>
              <input type="text" value={adress} onChange={handleAdress} />
            </div>

            <div className={styles.input}>
              <label>Número</label>
              <input id="" type="text" value={number} onChange={handleNumber} />
            </div>

            <div className={styles.input}>
              <label>Cidade</label>
              <input id="" type="text" value={city} onChange={handleCity} />
            </div>

            <div className={styles.input}>
              <label>Estado</label>
              <input id="" type="text" value={state} onChange={handleState} />
            </div>
          </section>

          <section className={styles.itensContainer}>
            <div>
              <h2>Ítens de coleta</h2>
              <span>Selecione um ou mais ítens abaixo</span>
            </div>

            <ul>
              <li
                key=""
              // onClick={() => handleSelectItem(id)}
              // className={selectedItems.includes(item.id) ? 'selected' : ''}
              >
                <img src="./cards/lampadas.svg" alt="" />
                <span>Lâmpadas</span>
              </li>
              <li
                key=""
              // onClick={() => handleSelectItem(id)}
              // className={selectedItems.includes(item.id) ? 'selected' : ''}
              >
                <img src="./cards/baterias.svg" alt="" />
                <span>Pilhas e Baterias</span>
              </li>
              <li
                key=""
              // onClick={() => handleSelectItem(id)}
              // className={selectedItems.includes(item.id) ? 'selected' : ''}
              >
                <img src="./cards/papeis.svg" alt="" />
                <span>Papéis e Papelão</span>
              </li>
              <li
                key=""
              // onClick={() => handleSelectItem(id)}
              // className={selectedItems.includes(item.id) ? 'selected' : ''}
              >
                <img src="./cards/eletronicos.svg" alt="" />
                <span>Resíduos Eletrônicos</span>
              </li>
              <li
                key=""
              // onClick={() => handleSelectItem(id)}
              // className={selectedItems.includes(item.id) ? 'selected' : ''}
              >
                <img src="./cards/organicos.svg" alt="" />
                <span>Resíduos Orgânicos</span>
              </li>
              <li
                key=""
              // onClick={() => handleSelectItem(id)}
              // className={selectedItems.includes(item.id) ? 'selected' : ''}
              >
                <img src="./cards/oleo.svg" alt="" />
                <span>Óleo de Cozinha</span>
              </li>
            </ul>
          </section>

          <div className={styles.buttonContainer}>
            <p></p>

            <button type="submit">
              Cadastrar ponto de coleta
          </button>
          </div>
        </form>
      </div>
    </>
  )
}