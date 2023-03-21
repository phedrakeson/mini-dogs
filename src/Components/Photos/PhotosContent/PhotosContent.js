import React from 'react'
import { useSelector } from 'react-redux'
import styles from './PhotosContent.module.css'

const PhotosContent = () => {
  const { list } = useSelector(state => state.photos);

  return (
    <ul className={`${styles.list} anime`}>
      {list.map((photo) => (
        <li key={photo.id} className={styles.item}>
          <img className={styles.img} src={photo.src} alt={photo.title} />
          <h2 className={styles.title}>{photo.title}</h2>
          <span className={styles.acessos}>{photo.acessos}</span>
        </li>
      ))}
    </ul>
  )
}

export default PhotosContent