import React, { useState } from 'react'

interface Bug {
    id: number;
    title: string;
    fixed: boolean;
}

const ArrayObject: React.FC = () => {
    const [bugs, setBugs] = useState<Bug[]>([
        {id: 1, title: 'Bug 1', fixed: false},
        {id: 2, title: 'Bug 2', fixed: false}
    ]);

    const handleClick = (id: number): void => {
        setBugs(bugs.map(bug => 
            bug.id === id ? {...bug, fixed: !bug.fixed} : bug
        ));
    }

    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Bug Tracker</h2>
            {bugs.map(bug => (
                <div key={bug.id} className="flex items-center justify-between p-3 mb-2 border rounded-lg">
                    <div>
                        <span className={`font-medium ${bug.fixed ? 'line-through text-green-600' : 'text-gray-800'}`}>
                            {bug.title}
                        </span>
                        <span className={`ml-2 px-2 py-1 text-xs rounded ${bug.fixed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {bug.fixed ? 'Fixed' : 'Open'}
                        </span>
                    </div>
                    <button 
                        onClick={() => handleClick(bug.id)}
                        className={`px-3 py-1 rounded text-sm font-medium ${
                            bug.fixed 
                                ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                                : 'bg-blue-500 hover:bg-blue-600 text-white'
                        }`}
                    >
                        {bug.fixed ? 'Reopen' : 'Fix Bug'}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ArrayObject