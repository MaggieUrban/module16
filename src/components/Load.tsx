import { useEffect, useState } from "react";

export const Load = () => {
  const [page, setPage] = useState(1);
  const [allCharacter, setAllCharecter] = useState<any[]>([]);
  const getData = async () => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const data = await res.json();
    setAllCharecter([...allCharacter, ...data.results]); //добавление к текущим героям
    // setAllCharecter([...data.results]); //каждый раз при клике записываются новые герои
  };

  useEffect(() => {
    getData();
  }, [page]);
  return (
    <div>
      <div className="container">
        {allCharacter.map((item) => (
          <div key={item.id}>
            <img src={item.image} />
            <p>
              {" "}
              {item.id} - {item.name}
            </p>
          </div>
        ))}
      </div>
      <button onClick={() => setPage(page + 1)}>next</button>
    </div>
  );
};
