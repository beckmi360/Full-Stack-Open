const Header = (props) =>{
  console.log(props.course)
  return <h1>{props.course}</h1>
}
const Content = (props) => {
  var part1name = "Course Name: " + props.parts[0].name
  var part1exercises = "Exercises: " + props.parts[0].exercises
  console.log(part1name)
  console.log(part1exercises)

  var part2name = "Course Name: " + props.parts[1].name
  var part2exercises = "Exercises: " + props.parts[1].exercises
  console.log(part2name)
  console.log(part2exercises)
  
  var part3name = "Course Name: " + props.parts[2].name
  var part3exercises = "Exercises: " + props.parts[2].exercises
  console.log(part3name)
  console.log(part3exercises)

  return  (
    <>
      <p>------------------------------------------------------</p>
      <p>{part1name}</p>
      <p>{part1exercises}</p>
      <p>------------------------------------------------------</p>
      <p>{part2name}</p>
      <p>{part2exercises}</p>
      <p>------------------------------------------------------</p>
      <p>{part3name}</p>
      <p>{part3exercises}</p>
      <p>------------------------------------------------------</p>
    </>

  )
}
const Total = (props) => {
  var part1exercises = props.parts[0].exercises
  var part2exercises = props.parts[1].exercises
  var part3exercises = props.parts[2].exercises
  var exercisestotal = part1exercises + part2exercises + part3exercises

  console.log(exercisestotal)
  return <p>Total number of exercises: {exercisestotal}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React', 
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

export default App