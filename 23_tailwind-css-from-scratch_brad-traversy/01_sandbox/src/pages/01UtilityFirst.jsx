const UtilityFirst = () => {
    return (
        <div className="flex items-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4">
            <img className="w-12 h-12" src="/img/warning.svg" alt="" />
            <div>
                <div className="text-xl font-medium text-black">
                    Are you sure?
                </div>
                <p className="text-slate-500">You are about to delete a post</p>
            </div>
        </div>
    );
};

export default UtilityFirst;
