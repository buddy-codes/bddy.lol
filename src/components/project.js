export default function Project(props) {
  return (
		<div class="flex flex-col p-3 rounded border border-gray-800 w-full mt-2" key={props.id}>
    	<a>{props.name}</a>
      <p>{props.description}</p>
    </div>
  );
}
