import { faSearch, faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const Icons = () => {
	return library.add(faSearch, faPlus, faMinus, faTimes);
};

export default Icons;
