import styles from './styles.module.scss'

import { Header } from '../../components/Header'

export default function collectPoint() {
  return (
    <>
      <Header title="Voltar para home" img="/voltar.svg" url="/" />
      <div className={styles.containerColetas}>
        <h3><strong>1 pontos </strong>encontrados</h3>
        <ul>
          <li
            key=""
          // onClick={() => handleSelectItem(id)}
          // className={selectedItems.includes(item.id) ? 'selected' : ''}
          >
            <img src="./image.png" alt="" />
            <h1>Colectoria</h1>
            <h2>Resíduos Eletronicos, Lampadas</h2>
            <p>Rio do Sul, Santa Catarina </p> 
            <p> Guilherme Gemballa, Jardim América</p>
            <p>Nº 260</p>
          </li>
        </ul>
      </div>
    </>
  )
}