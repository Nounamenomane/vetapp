import EventsCards from '../../components/EventsCards/EventsCards'
import Pagination from '../../components/Pagination/Pagination'
import scss from '../EventsBlockComp/EventsBlock.module.scss'

function NewItemsBlock({PaginateCards, cards, handlePageChange}) {
    return (
        <div>
            <div>
                <div className={scss.wrapper}>
                    <h1>Новинки</h1>
                    {
                        PaginateCards?.map((el, index) => (
                            <EventsCards
                                key={el.id}
                                {...el}
                            />
                        ))
                    }
                </div>
                <Pagination
                    maxCard={12}
                    cardsLength={cards?.length}
                    onPageChange={handlePageChange}
                />
            </div>

        </div>
    )
}

export default NewItemsBlock