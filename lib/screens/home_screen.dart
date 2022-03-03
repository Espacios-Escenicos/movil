import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    const fontsize30 = TextStyle(fontSize: 35);
    int counter = 10;

    return Scaffold(
      appBar: AppBar(
        title: const Center(child: Text('Hola')),
        elevation: 1.0,
      ),
      backgroundColor: Colors.blueGrey,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            const Text(
              'Numero de clicks',
              style: fontsize30,
            ),
            Text(
              '$counter',
              style: fontsize30,
            )
          ],
        ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.add),
        onPressed: (() {
          counter++;
          print(counter);
        }),
      ),
    );
  }
}
