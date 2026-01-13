

const Results = ({metrica, descripcion}) => {
    return (
        <div>
            <p className={`text-2xl font-bold text-white`}>
                {metrica}
            </p>
            <p className={`text-sm text-gray-400`}>
                {descripcion}
            </p>
        </div>
    )
}

export default Results