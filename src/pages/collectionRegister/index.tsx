import styles from './styles.module.scss'

import { Header } from '../../components/Header'
import { useState } from 'react'
import Swal from 'sweetalert2'

interface addRegisterProps {
  addRegister: any
}

export default function collectionRegister({ addRegister }: addRegisterProps) {
  const [selectedItems, setSelectedItems] = useState([])
  const [nameE, setNameE] = useState('')
  const [adress, setAdress] = useState('')
  const [number, setNumber] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const data = [
    { id: 1, name: "Lâmpadas", value: "lampadas", img: "./cards/lampadas.svg" },
    { id: 2, name: "Pilhas e Baterias", value: "baterias", img: "./cards/baterias.svg" },
    { id: 3, name: "Papéis e Papelão", value: "papeis", img: "./cards/papeis.svg" },
    { id: 4, name: "Resíduos Eletrônicos", value: "eletronicos", img: "./cards/eletronicos.svg" },
    { id: 5, name: "Resíduos Orgânicos", value: "organicos", img: "./cards/organicos.svg" },
    { id: 6, name: "Óleo de Cozinha", value: "oleo", img: "./cards/oleo.svg" }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()

    const objRegister: any = {
      id: Date.now(),
      nameE,
      adress,
      number,
      city,
      state,
      selectedItems
    }

    addRegister(objRegister)
  }

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

              <input
                type="text"
                value={nameE}
                onChange={(e) => setNameE(e.target.value)} />
            </div>

            <div className={styles.input}>
              <label>Endereço</label>

              <input
                type="text"
                value={adress}
                onChange={(e) => setAdress(e.target.value)} />
            </div>

            <div className={styles.input}>
              <label>Número</label>

              <input
                type="number"
                value={number}
                onChange={(e) =>
                  setNumber(e.target.value)}
              />
            </div>

            <div className={styles.input}>
              <label>Cidade</label>

              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)} />
            </div>

            <div className={styles.input}>
              <label>Estado</label>

              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)} />
            </div>
          </section>

          <section className={styles.itensContainer}>
            <div>
              <h2>Ítens de coleta</h2>

              <span>Selecione um ou mais ítens abaixo</span>
            </div>

            <ul>
              {data.map(item => (
                <li
                  key={item.id}
                  value={item.value}
                  onClick={() => {
                    const include = selectedItems.includes(item.value)
                    if (include) setSelectedItems(oldValue => oldValue.filter(stringName => stringName !== item.value))
                    else setSelectedItems(oldValue => [...oldValue, item.value])
                  }}
                  className={selectedItems.includes(item.value) ? styles.selected : ''}
                >
                  <img src={item.img} alt={item.name} />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className={styles.buttonContainer}>
            <p></p>

            <button type="submit"
              onClick={() => Swal.fire({
                icon: 'success',
                title: 'Boa!',
                text: 'Ponto de coleta cadastrado com successo!',
                confirmButtonText: "Continuar cadastrando",
                footer: '<a href="/">Voltar a home</a>'
              })}>
              Cadastrar ponto de coleta
            </button>
          </div>
        </form>
      </div>
    </>
  )
}