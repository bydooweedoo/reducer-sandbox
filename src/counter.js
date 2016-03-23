/**
 * Returns counter function starting from given number.
 * Each time counter function is called, increment counter
 * from previous state and stringify result.
 *
 *      import counter from './counter';
 *
 *      const counterFrom1 = counter(1);
 *
 *      counterFrom1(); //=> '2'
 *      counterFrom1(); //=> '3'
 */
export default number => {
    let counter = 0;

    return () => {
        ++counter;
        return String(counter + number);
    };
};
