import styles from './styles.module.scss'

import { Header } from '../../components/Header'

export default function collectionRegister() {
  return (
    <>
      <Header title="Voltar para home" img="/voltar.svg" url="/" />

      <div className={styles.containerCadastro}>
        <h1>Cadastro do <br /> ponto de coleta</h1>

        <h3>Dados da entidade</h3>

        <form action="">
          <section className={styles.inputContainer}>
            <div className={styles.input}>
              <label>Nome da entidade</label>
              <input type="text" />
            </div>

            <div className={styles.input}>
              <label>Endereço</label>
              <input type="text" />
            </div>

            <div className={styles.input}>
              <label>Número</label>
              <input type="text" />
            </div>

            <div className={styles.input}>
              <label>Cidade</label>
              <input type="text" />
            </div>

            <div className={styles.input}>
              <label>Estado</label>
              <input type="text" />
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