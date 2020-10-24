import React, {useEffect} from 'react'
import {pathActions} from '../../actions'
import {useDispatch, useSelector} from 'react-redux'
import PathItem from './PathItem';
import PropTypes from 'prop-types'

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
                    <PathItem key={item.id} id={item.id} title={item.title} image={item.imageUrl} />
                )) : null}
            </div>
        </section>
    )
}

Paths.propTypes = {
    content: PropTypes.arrayOf(PropTypes.object),
    pathActions: PropTypes.object
}

export default Paths;
