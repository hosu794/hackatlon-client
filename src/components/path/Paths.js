import React, {useEffect} from 'react'
import {pathActions} from '../../actions'
import {useDispatch, useSelector} from 'react-redux'
import PathItem from './PathItem';

const Paths = () => {
    const dispatch = useDispatch();

    const content = useSelector(state => state.path.content);

    useEffect(() => {
        dispatch(pathActions.getAllPaths());
    }, [])


    return (
        <section className="sekcja-2">
            <div className="Kategorie">
                {content ? content.map(item => (
                  <PathItem  title={item.title} />
                )) : null}
            </div>
        </section>
    )
}

export default Paths;
