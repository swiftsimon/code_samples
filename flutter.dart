import 'package:flutter/material.dart';

// Small sample widget just to see how Flutter works

void main() => runApp(MaterialApp(
  home: Home()
))

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appbar:AppBar(
        title: Text('Hello World'),
        centerTitle: true,
        backgroundColor: Colors.blue[600],
      ),
      body: Center(
        child: Text(
          'Welcome to Flutter',
          style: TextStyle(
            fontSize: 20.0,
            fontWeight: FontWeight.bold,
            letterSpacing: 2.0,
          )
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: Text('add')
      ),
    );
  }
}
