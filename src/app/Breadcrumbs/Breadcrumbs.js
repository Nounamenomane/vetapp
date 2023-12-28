// components/Breadcrumbs.js
import Link from 'next/link';
import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = ({ crumbs }) => {
    return (
        <div className={styles.crumbs}>
            {crumbs.map((crumb, index) => (
                <span className={styles.crumb} key={index}>
                    {index === crumbs.length - 1 ? (
                        <span className={styles.crumb}>{crumb.breadcrumb}</span>
                    ) : (
                        <>
                            <Link href={crumb.pathname} passHref>
                                <>{crumb.breadcrumb}</>
                            </Link>
                            <img src="/imgs/item.png" alt="separator" style={{ margin: '0 5px' }} />
                        </>
                    )}
                    {index < crumbs.length - 1 && ' '}
                </span>
            ))}
        </div>
    );
};

export default Breadcrumbs;
