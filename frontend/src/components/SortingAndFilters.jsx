import React, { useContext, useState, useEffect} from 'react';
import GlobalContext from '../context/GlobalContext';

function SortingAndFilters() {
  const [ filterSelected, setFilterSelected] = useState('Sem Ordenação');
  const { tasks, setTasksFilter, aux, setAux, original } = useContext(GlobalContext);

  const asc = () => {
    original.sort(function (a, b) {
      if (a.description > b.description) return 1;
      if (a.description < b.description) return -1;
      return 0;
    });
    setTasksFilter(original);
    setAux(aux+1);
  }

  const ascDate = () => {
    original.sort(function (a, b) {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      return 0;
    });
    setTasksFilter(original);
    setAux(aux+1);
  }

  const descDate = () => {
    original.sort(function (a, b) {
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
      return 0;
    });
    setTasksFilter(original);
    setAux(aux+1);
  }

  const filterStatus = async (status) => {
    const result = original.filter((task) => (task.status === status ));
    setTasksFilter(result);
    setAux(aux+1);
  }

  useEffect(() => {
    switch (filterSelected) {
      case 'Alfabética':
        asc();
        break;
      case 'Mais recentes':
        ascDate();
        break;
      case 'Mais antigos':
        descDate();
        break;
      case 'Pendente':
        filterStatus('Pendente');
        break;
      case 'Em andamento':
        filterStatus('Em andamento');
        break;
      case 'Pronto':
        filterStatus('Pronto');
        break;
      default:
        setTasksFilter(tasks);
        break;
    }
  }, [filterSelected]);


  return (
    <div>
      Ordenação:
      <select
        value={ filterSelected }
        onChange={ (e) => setFilterSelected(e.target.value) }
      >
        <option value="Sem Ordenação">Sem Ordenação</option>
        <option value="Alfabética">Alfabética</option>
        <option value="Mais recentes">Mais recentes</option>
        <option value="Mais antigos">Mais antigos</option>
        <option value="Pendente">Pendente</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Pronto">Pronto</option>
      </select> 
    </div>
  );
}

export default SortingAndFilters;
