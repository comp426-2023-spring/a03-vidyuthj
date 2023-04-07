
export function rps_function(shot) {
    const rps_moves = ["rock", "paper", "scissors"];
    if(shot== null) {
        return {"player": rps_moves[Math.floor(Math.random() * rps_moves.length)]};

    }
    let opponent_move = rps_moves[Math.floor(Math.random() * rps_moves.length)];

    let game_message = "";
    if(shot === opponent_move) {
        game_message = "tie";
    }
    else if((shot === "scissors" && opponent_move === "paper")||(shot === "rock" && opponent_move === "scissors") || (shot === "paper" && opponent_move === "rock")) {
        game_message = "win";
    }
    else {
        game_message = "lose";
    }
    return `You chose ${shot}, computer chose ${opponent_move}. ${game_message}`;
}

export function rpsls_function(shot) {
    const rpsls_moves = ["rock", "paper", "scissors", "lizards", "spock"];
    if(shot== null) {
        return {"player": rpsls_moves[Math.floor(Math.random() * rpsls_moves.length)]};

    }
    let opponent_move = rpsls_moves[Math.floor(Math.random()* rpsls_moves.length)];
    if(!hand.includes(shot)) {
        console.log("Argument out of range!");
        console.error();
    }

    let game_message = "";
    if(shot == opponent_move) {
        game_message = "tie";
    }
    else if((shot === "spock" && (opponent_move === "rock" || opponent_move === "scissors"))||(shot === "lizard" && (opponent_move === "paper" || opponent_move === "spock"))|| (shot === "scissors" && (opponent_move === "paper" || opponent_move === "lizard")) || (shot === "paper" && (opponent_move === "rock" || opponent_move === "spock"))|| (shot === "rock" && (opponent_move === "scissors" || opponent_move === "lizard"))) {
        game_message = "win";
    }
    else {
        game_message = "lose";
    }
    return `You chose ${shot}, computer chose ${opponent_move}. ${game_message}`;
}