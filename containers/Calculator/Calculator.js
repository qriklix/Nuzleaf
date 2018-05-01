import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

import styles from '../../config/styles';

class Calculator extends Component {
    render() {
        return (
            <View style={styles.calculator}>
                <View style={styles.inputsCol}>
                    <ScrollView

                        horizontal={true}
                    >
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non velit non turpis ornare lobortis. Fusce et neque elit. Curabitur id augue a ipsum viverra varius eget eget leo. Suspendisse tincidunt id lacus sed imperdiet. Aliquam erat volutpat. Quisque faucibus rutrum placerat. Vestibulum ut dui non dui semper pulvinar. Mauris augue dolor, efficitur in suscipit ac, consequat in elit. Phasellus non accumsan ligula. Curabitur malesuada placerat vulputate.

    Cras tellus urna, imperdiet vel est id, venenatis aliquam felis. Cras pulvinar molestie posuere. Praesent eros lacus, tristique non rutrum non, mollis aliquam risus. Fusce fringilla orci at blandit finibus. Ut in eros tortor. Maecenas vitae sapien sed velit hendrerit dictum ut ac mi. Sed ex erat, pulvinar ut velit at, elementum porta lacus. Suspendisse in ligula risus. Sed id arcu sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eget pretium libero. Nulla quis risus volutpat leo dapibus interdum. Suspendisse cursus ornare faucibus. Aliquam et risus laoreet enim sollicitudin mattis. Aenean sed porttitor nunc.

    Morbi nisi metus, tempor eu mollis id, suscipit in lacus. Nullam blandit metus id elit viverra, in euismod nibh euismod. Pellentesque egestas quam et massa dapibus, quis varius dolor pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras non tincidunt metus. Pellentesque id arcu tempor, rutrum ante ut, consectetur purus. Sed feugiat sit amet dui vitae accumsan.

    Proin egestas consectetur diam ac ullamcorper. Aenean quis imperdiet sapien. Curabitur ullamcorper ligula eu turpis aliquet, mattis tincidunt libero condimentum. Praesent luctus nisl ut ante feugiat, sit amet bibendum eros vulputate. Proin hendrerit elit eget risus hendrerit condimentum. Vestibulum auctor ut sapien ac euismod. Praesent faucibus euismod diam, a venenatis ligula cursus id. Morbi ultrices interdum dui sed accumsan. Maecenas sit amet laoreet sem, in consectetur ipsum. Aenean gravida fringilla lectus in rutrum. Maecenas vel aliquet tellus. Etiam ut suscipit tortor, eget consequat urna. Nam vel nunc vitae ligula fermentum interdum. Nullam sit amet quam sit amet felis vestibulum iaculis. Donec sed mi augue. Sed faucibus semper sem, sed consequat ligula tempus id.

    Cras posuere, nibh et posuere laoreet, elit enim vulputate diam, non bibendum diam dolor eget est. Donec eget elementum augue. Integer pretium, turpis id gravida scelerisque, odio libero porttitor risus, et molestie arcu diam ac nisl. In faucibus imperdiet nisi, sed sollicitudin dolor dictum sit amet. Ut vel metus sit amet sapien maximus congue. Curabitur justo ex, elementum quis risus eu, cursus egestas lacus. Donec mollis justo eu pellentesque convallis. Suspendisse ac maximus massa. Etiam sed facilisis metus. Duis faucibus dui in tortor congue placerat. Quisque at consequat eros, eget cursus magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Text>
                    </ScrollView>
                </View>
                <View style={styles.sumCol}>
                    <Text>Sum part...</Text>
                </View>
            </View>
        );
    }
}

export default Calculator;