function Home() {
const { items, cartItems, favorites, setIsAddedCart, isLoading, searchValue } = React.useContext(AppContext);
const renderItems = () => {
const filtredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
return (isLoading ? [...Array(8)] : filtredItems).map((item, i) => (
<Card key={"card" + i} {...item} favorited={favorites.some(e=> e.parentId === item.parentId ? true : false)}
    added={cartItems.some(e => e.parentId === item.parentId ? true : false)}
    showEdit
    showDeleted
    showFavorite
    />
    ));
    }
    return (
    <div>
        <TitleCards key="titleCards" />
        <div className={styles.cardsAdded}>
            {<div className={styles.added} onClick={()=> setIsAddedCart(true)} >
                <img src='images/added.svg' />
            </div>}
        </div>
        <div className={styles.cards}>
            {renderItems()}
        </div>
    </div>
    );
    };