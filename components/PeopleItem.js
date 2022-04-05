import { UserIcon } from '@heroicons/react/outline';

function PeopleItem({ name, role }) {
  return (
    <div className="flex">
      <div className="my-auto">
        <div className="mr-2 bg-gray-200 rounded p-3">
          <UserIcon className="h-8 l-8" />
        </div>
      </div>
      <div>
        <p className="mb-0 py-0">{name.trim()}</p>
        <span className="text-xs">{role}</span>
      </div>
    </div>
  );
}

export default PeopleItem;
