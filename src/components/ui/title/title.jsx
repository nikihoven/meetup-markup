import './title.scss'

const Title = ({text, className}) => (
    <h2 className={className ? className + ' title' : 'title'}>
        {text}
    </h2>
)

export { Title }