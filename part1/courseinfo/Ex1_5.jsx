const Ex1_5 = () => {
const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total total={course.parts} />
        </div>
    )
}
const Header = (props) => <h1>{props.course}</h1>

const Content = ({ parts }) => {
    return (
        <>
            <Part part={parts[0]} />
            <Part part={parts[1]} />
            <Part part={parts[2]} />
        </>
    )
}

const Part = ({ part }) => {
    const { name, exercises } = part
    return (
        <p>{name} {exercises}</p>
    )
}

const Total = ({ total }) => <p>Number of exercises {total[0].exercises + total[1].exercises + total[2].exercises}</p>

export default Ex1_5