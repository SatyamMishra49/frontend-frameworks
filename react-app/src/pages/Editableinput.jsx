import { Edit } from 'lucide-react';

export default function EditableInput() {
    return (
        <div className="flex justify-center mt-24">
            <div className="w-[400px] bg-green-200 p-4 rounded">
                <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">Items</span>
                    <button>
                        <Edit className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
