import { useDispatch } from "react-redux";

const SagaExample = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>this is saga example</h2>
      <h3>see console and devtools</h3>
      <button
        onClick={() => {
          dispatch({
            type: "GET_USERS",
            payload: {
              _meta: {
                page: 2,
                max: 10,
              },
            },
          });
        }}
      >
        get users 
      </button>
      <button onClick={ () => {
          dispatch({
              type : 'EMPTY_USERS'
          })
      }}> clear </button>
    </div>
  );
};

export default SagaExample;
