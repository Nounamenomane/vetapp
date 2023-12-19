import React from 'react'
import styles from './Subscription.module.scss'

function Subscription() {
    return (
        <div className={styles.subscription}>
            <div className={styles.subscription_container}>
                <h1>Подписка на новости</h1>
                <div>
                    <input type="email" placeholder='email@adress.com' />
                    <button type='submit'>Подписаться</button>
                </div>
            </div>
        </div>
    )
}

export default Subscription