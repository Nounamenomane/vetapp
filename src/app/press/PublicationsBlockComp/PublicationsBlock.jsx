import EventsCards from '../../components/EventsCards/EventsCards'
import Pagination from '../../components/Pagination/Pagination'
import scss from '../EventsBlockComp/EventsBlock.module.scss'
import PublicationsCard from '../../components/PublicationsCard/PublicationsCard'

function EventsBlock({PaginateCards, cards, handlePageChange}) {
    return (
        <div>
            <div>
                <div className={scss.wrapper}>
                    <h1>Публикации</h1>
                    {
                        PaginateCards?.map((el, index) => (
                            <PublicationsCard
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

export default EventsBlock