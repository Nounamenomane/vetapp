// components/Breadcrumbs.js
import Link from 'next/link';
import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = ({ crumbs }) => {
    return (
        <div className={styles.crumbs}>
            {crumbs?.map((crumb, index) => (
                <span className={styles.container} key={index}>
                    {index === crumbs.length - 1 ? (
                        <span className={styles.crumb}>{crumb.breadcrumb}</span>
                    ) : (
                        <>
                            <Link href={crumb.pathname} passHref>
                                <>{crumb.breadcrumb}</>
                            </Link>
                            <img className={styles.left} src="/imgs/item.png" alt="separator" style={{ margin: '0 10px' }} />
                        </>
                    )}
                    {index < crumbs.length - 1 && ' '}
                </span>
            ))}
        </div>
    );
};

export default Breadcrumbs;
