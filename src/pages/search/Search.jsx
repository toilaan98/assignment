import Register from '../home/Hompage/footer/Register';

import Header from '../home/Hompage/Header/Header';

import SearchPopup from './SearchPag/SearchPage';

const Search = () => {
    return (
        <div>
            <Header />
            <main>
                <SearchPopup />
            </main>
            <footer className="down">
                <Register />
            </footer>
        </div>
    );
};

export default Search;
