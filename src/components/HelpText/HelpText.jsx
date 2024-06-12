import { useState } from 'react';
import { ARROW_UP_ICON } from '../../constants/image';
import styles from './HelpText.module.scss';

const HelpText = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [closeButton, setCloseButton] = useState(false);

    const handleCloseButton = () => {
        setCloseButton(true);
        setTimeout(() => {
            toggleCollapse();
        }, 500);
    };

    const toggleCollapse = () => {
        setCloseButton(false);
        setIsCollapsed(prevState => {
            const newState = !prevState;
            console.log("isCollapsed", newState);
            return newState;
        });
    };

    return (
        <div className={styles.container}>
            {isCollapsed ? (
                <div className={styles.collapseButton} onClick={toggleCollapse}>
                    Show Help
                    <span className={styles.collapseIconQuestion}>
                        {/* <img src={QUESTION_ACTIVE_ICON} alt="question_icon" /> */}
                    </span>
                </div>
            ) : (
                <div className={styles.helpTextContainer}>
                    <div className={`${closeButton ? styles.closed : styles.helpText}`}>
                        <div>- <code>Ctrl</code>/<code>Shift</code>+<code>Click</code> on an object to add a point</div>
                        <div>- <code>Right click</code> on an object to add/insert a point</div>
                        <div>- <code>Right click</code> on a road segment to add mid-points</div>
                        <div>- <code>Right click</code> on a point to delete or replace (Ctrl/Shift + Click to replace)</div>
                        <div>- <code>Click</code> on a point to show move arrows and planes. Grab arrows or planes to move in that directions only.</div>
                        <div className={`${styles.collapseArea} ${closeButton ? styles.closed : ''}`}>
                            <div className={styles.collapseAreaImg}>
                                <img src={ARROW_UP_ICON} alt="collapse" className={styles.collapseIconArrow} onClick={handleCloseButton} />
                            </div>
                            <span className={styles.border_Bottom}></span>
                        </div>
                    </div>
                </div>
            )}
            <div style={{ marginTop: '20px' }}>
                <div>- <code>Ctrl</code>/<code>Shift</code>+<code>Click</code> on an object to add a point</div>
                <div>- <code>Right click</code> on an object to add/insert a point</div>
                <div>- <code>Right click</code> on a road segment to add mid-points</div>
                <div>- <code>Right click</code> on a point to delete or replace (Ctrl/Shift + Click to replace)</div>
                <div>- <code>Click</code> on a point to show move arrows and planes. Grab arrows or planes to move in that directions only.</div>
            </div>
        </div>
    );
};

export default HelpText;
