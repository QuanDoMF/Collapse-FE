/* eslint-disable */
import React, { useRef, useState, useEffect } from 'react';
import styles from './Dropdown.module.scss';
// import { search } from "../../utils/utility";
// import * as images from "../../constants/image";

const Dropdown = ({ className, listData, top, left, getValue }) => {
    const [currentValue, setCurrentValue] = useState("");
    const [textSearch, setTextSearch] = useState("");
    const [isSearch, setIsSearch] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsEdit(false);
                setTextSearch("");
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const onSelect = (value) => {
        setCurrentValue(value);
        setIsEdit(false);
        getValue(value);
    };

    const handleEdit = () => {
        setIsEdit(!isEdit);
    };

    const listDataRender = search(isSearch ? "" : textSearch, listData);

    return (
        <div className={`${className ? className : ""} ${styles.container}`} ref={dropdownRef}>
            <img className={styles.dropdownToggle} alt="edit" src={images.EDIT_ICON} onClick={handleEdit} />
            {isEdit && (
                <div className={styles.dropDown} style={{ top: top, left: left ? left : 0 }}>
                    <input
                        className={`${styles.inputDropdown}`}
                        value={textSearch}
                        onChange={(e) => {
                            setTextSearch(e.target.value);
                            setIsSearch(false);
                        }}
                    />
                    <div className={styles.listDropdown}>
                        {listDataRender?.length > 0 ? (
                            listDataRender?.map((value, index) => (
                                <div key={index} onClick={() => onSelect(value)}>{value}</div>
                            ))
                        ) : (
                            <div className={styles.noData}>No data.</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;