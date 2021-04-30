import styles from './styles.module.scss'

import { Header } from '../../components/Header'

export default function collectPoint() {
  let formArray = []
  
  if (typeof window !== 'undefined') {
    const formulario = localStorage.getItem("formulario.react")
    formArray = JSON.parse(formulario) || []
  }

  return (
    <>
      <Header title="Voltar para home" img="/voltar.svg" url="/" />
      
      <div className={styles.containerColetas}>
        <h3>
          <strong>Pontos </strong>encontrados
        </h3>

         <ul>
          {formArray && formArray.map(item => (
            <li
              key={item.id}
            >
              <img src="./image.png" alt="" />
              <h1>{item.nameE}</h1>
              <h2>{item.selectedItems}</h2>
              <p>{item.state}</p>
              <p>{item.adress}, {item.city} </p>
              <p>Nº {item.number}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}