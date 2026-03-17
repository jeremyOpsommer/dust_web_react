function Profile() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <dl>
          <dt className="font-semibold text-gray-900 dark:text-white">Pseudo</dt>
          <dd className="text-gray-500 dark:text-gray-400">Test</dd>
        </dl>
        <dl>
          <dt className="font-semibold text-gray-900 dark:text-white">Email</dt>
          <dd className="text-gray-500 dark:text-gray-400">test@example.com</dd>
        </dl>
        <dl>
          <dt className="font-semibold text-gray-900 dark:text-white">Inscrit le</dt>
          <dd className="text-gray-500 dark:text-gray-400">01/01/2025 10:00</dd>
        </dl>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Date de dernière modification : 01/02/2025 15:00
      </div>
      <div className="col-span-2">
        <button
          type="button"
          className="mr-5 float-right px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Editer
        </button>
      </div>
    </div>
  );
}

export default Profile;
