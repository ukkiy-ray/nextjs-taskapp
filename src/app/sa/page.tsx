"use client";

import { addTaskWithId, FormState } from "@/actions/sampleActions";
import { useFormState, useFormStatus } from "react-dom";

const ServerActionsPage = () => {
    const initialState: FormState = { error: '' };
    const [state, formAction] = useFormState(addTaskWithId, initialState);

    const SubmitButton = () => {
        const { pending } = useFormStatus();
        return (
            <button type="submit" className="bg-blue-500 text-white rounded-md p-2" disabled={pending}>
                {pending ? 'Submitting...' : 'Submit'}
            </button>
        )
    }
    return (
    <div>
      <form action={formAction}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="border border-gray-300 rounded-md p-2"
        />
        <SubmitButton />
      </form>
      <div className="flex flex-col gap-2">
        <div className="border border-gray-300 rounded-md p-2">
          <h3 className="text-lg font-bold">Title</h3>
          <p className="text-gray-500">Description</p>
        </div>
        <p className="text-red-500">{state.error}</p>
      </div>
    </div>
  );
};

export default ServerActionsPage;
