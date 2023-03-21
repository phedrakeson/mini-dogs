import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos } from '../../store/photos';
import styles from './Photos.module.css'
import PhotosContent from './PhotosContent/PhotosContent';

const Photos = () => {

  const dispatch = useDispatch();
  const { data } = useSelector(state => state.photos);

  React.useEffect(() => {
    dispatch(fetchPhotos(1))
  }, [dispatch])

  return (
    <section>
      {data && <PhotosContent />}
    </section>
  )
}

export default Photos