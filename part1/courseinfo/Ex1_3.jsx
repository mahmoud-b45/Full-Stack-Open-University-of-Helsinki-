const Ex1_3 = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content parts={[part1, part2, part3,]} />
            <Total total={part1.exercises + part2.exercises + part3.exercises} />
        </div>
    )
}
const Header = (props) => <h1>{props.course}</h1>

const Content = ({ parts, }) => <>
    <Part part={parts[0]} />
    <Part part={parts[1]} />
    <Part part={parts[2]} />
</>

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Total = ({ text, total }) => <p>Number of exercises {total}</p>
export default Ex1_3