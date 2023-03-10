import { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { CounterContext } from '../../contexts/ConterProvider/context';
import {
  decrementCounter,
  incrementCounter,
} from '../../contexts/ConterProvider/action';

export const Posts = () => {
  const isMounted = useRef(true);
  const passInput = useRef();

  const { postsState, postsDispatch } = useContext(PostsContext);

  const { counterState, counterDispatch } = useContext(CounterContext);

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
      return () => {
        isMounted.current = false;
      };
    });
    console.log(passInput);
  }, [postsDispatch]);

  return (
    <div>
      <input
        type="number"
        name="pass"
        id="pass"
        placeholder="passo do contador"
        ref={passInput}
      />
      <button
        onClick={() =>
          incrementCounter(counterDispatch, Number(passInput.current.value))
        }
      >
        Counter {counterState.counter}+
      </button>
      <button
        onClick={() =>
          decrementCounter(counterDispatch, Number(passInput.current.value))
        }
      >
        Counter {counterState.counter}-
      </button>
      <h1>Seus Posts: </h1>
      {postsState.loading && (
        <p>
          <strong>Carregando posts...</strong>
        </p>
      )}
      {postsState.posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
};
