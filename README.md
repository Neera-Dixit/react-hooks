React Hooks enable us to use state, use React life cycle methods in Function component
useState hook is used to set state in Function component
useEffect hook is used to perform side effects (React lifecycle methods) in Class component

## Problem React Hooks solve
1. Allows to reuse stateful logic and test independently (Code reuse)
2. React classes have lifecycle methods which makes related code to be in different functions  and non related code to be in same functions (binding and unbinding listeners) which might result in causing bugs and inconsistency , hooks allow component to further abstracted into functions where each function carries out individual functionality . Example : binding listeners in componentDidMount and unbinding listeners in componentWillUnmount (Code organisation)
3. Classes confuse both people and machines (learning curve)
4. Allows state data type to be other than Object