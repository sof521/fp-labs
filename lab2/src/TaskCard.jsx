import './сard.css';

export function TaskCard ({ visibleTasks, handleChange, handleDelete }) {
    const colors = ["#FE9B74", "#FFCA6C", "#E2EE8C", "#B792FC", "#03D2FC"];

    return(
        <div className="row g-2 mt-5">
            {visibleTasks.map((task, index) => {
                const cardColor = colors[index % colors.length];
                const checkboxBg = `url("data:image/svg+xml,${encodeURIComponent(
                `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                    <path fill='none' stroke='${cardColor}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/>
                </svg>`
                )}")`;

                return (
                    <div key={task.id} className="col-3">
                        <div
                            className="card shadow-sm"
                            style={{ backgroundColor: cardColor }}
                        >
                            <div className="card-body">
                                <div className="form-check">
                                    <input
                                    className="form-check-input"
                                    style={{
                                        backgroundImage: task.completed ? checkboxBg : 'none',
                                    }}
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => handleChange(task.id)}
                                    />
                                    <label
                                    className="form-check-label ms-2"
                                    style={{ color: task.completed ? "#4B4B4B" : "black" }}
                                    >
                                    {task.text}
                                    </label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <small className="text-muted">
                                        {new Date(task.createdAt).toLocaleString('ru-RU', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: false,
                                        }).replace(',', '\u00A0')} 
                                    </small>
                                    <div className="trash-icon" onClick={() => handleDelete(task.id)}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}