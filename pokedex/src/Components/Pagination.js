const Pagination = ({ currentPage, changePage }) => {
    const pages = [...Array(39).keys()];
    const actualPages = pages.filter((item) => {

        if (currentPage <= 9) {
            return item <= 10;
        }
        else if (currentPage <= 19) {
            return item >= 9 && item <= 20;
        } else if (currentPage <= 29) {
            return item >= 19 && item <= 30;
        }
        else {
            return item >= 29;
        }
    })

 

    const handleChangePage = (e) => {
        changePage(e.target.dataset.index);
    }
    return (
        <div>
            {actualPages.map((page) => {
                if (page === currentPage) {
                    return <button
                        key={page}
                        data-index={page + 1}
                        onClick={handleChangePage}>{page + 1}</button>
                }
                return <button
                    key={page}
                    data-index={page + 1}
                    onClick={handleChangePage}>{page + 1}</button>
            })}
            <button
                onClick={handleChangePage} data-index={40}>Final</button>
        </div>
    )
}

export default Pagination