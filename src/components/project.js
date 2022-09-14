export default function Project(props) {
  return (
    <div class="project" id={`${props.id}`} onclick="location.href = '#{ props.id }'">
      <span class="title">{ props.name }</span>
      <p>{ props.desc }</p>
    </div>
  );
}
