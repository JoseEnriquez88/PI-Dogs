import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogById } from "../../redux/actions";

const URL = "https://api.thedogapi.com/v1/breeds";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.detail.detail);

  useEffect(() => {
    axios(`${URL}/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          dispatch(getDogById(data));
        } else {
          window.alert("No hay perros con ese id");
        }
      });
  }, [dispatch, id]);

  return (
    <div>
      {dog.name ? (
        <div>
          <p>{dog.id}</p>
          <img src={dog.image.url} alt="img" />
          <h1>{dog.name}</h1>
          <p>{dog.height.metric}</p>
          <p>{dog.weight.metric}</p>
          <p>{dog.temperament}</p>
          <p>{dog.life_span}</p>
        </div>
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
};

export default Detail;
